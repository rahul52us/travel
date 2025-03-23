"use client";
import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import { Tooltip } from "@chakra-ui/react";
import stores from "../../store/stores";
import useDebounce from "../../component/config/component/customHooks/useDebounce";
import { tablePageLimit } from "../../component/config/utils/variable";
import CustomTable from "../../component/config/component/CustomTable/CustomTable";
import DeleteData from "./DeleteData";

const LocationList = observer(
  ({ currentPage, setCurrentPage, onAdd, onEdit }: any) => {
    const {
      locationStore: { getLocations, location },
      auth: { openNotification },
    } = stores;
    const [deleteData, setDeleteData] = useState({
      data: null,
      open: false,
    });
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 1000);

    const applyGetAllRecords = useCallback(
      ({ page = 1, limit = tablePageLimit, reset = false }) => {
        const query: any = { page, limit };

        // Only add the search query if debouncedSearchQuery is a non-empty string
        if (debouncedSearchQuery?.trim()) {
          query.search = debouncedSearchQuery.trim();
        }

        if (reset) {
          query.page = 1;
          query.limit = tablePageLimit;
          query.reset = true
        }

        getLocations(query)
          .then(() => {})
          .catch((err) => {
            openNotification({
              type: "error",
              title: "Failed to get location",
              message: err?.message,
            });
          });
      },
      [debouncedSearchQuery, getLocations, openNotification]
    );

    useEffect(() => {
      applyGetAllRecords({ page: currentPage, limit: tablePageLimit });
    }, [currentPage, debouncedSearchQuery, applyGetAllRecords]);

    const handleChangePage = (page: number) => {
      setCurrentPage(page);
    };

    const resetTableData = () => {
      setCurrentPage(1);
      setSearchQuery("");
      applyGetAllRecords({ reset: true });
    };

    // Define table columns
    const TestimonialTableColumns = [
      {
        headerName: "S.No.",
        key: "sno",
        props: { row: { textAlign: "center" } },
      },
      {
        headerName: "Name",
        key: "name",
        props: { row: { textAlign: "center" } },
      },
      {
        headerName: "Description",
        key: "description",
        type: "tooltip",
        function: (testimonial: any) =>
          testimonial.description ? (
            <Tooltip label={testimonial?.description} hasArrow zIndex={9999}>
              <span>{testimonial?.description?.slice(0, 50)}</span>
            </Tooltip>
          ) : (
            "-"
          ),
        props: { row: { textAlign: "center" } },
      },
      {
        headerName: "Actions",
        key: "table-actions",
        type: "table-actions",
        props: {
          // isSticky: true,
          row: { minW: 180, textAlign: "center" },
          column: { textAlign: "center" },
        },
      },
    ];

    return (
      <>
        <CustomTable
          title="Locations"
          data={location.data.map((t: any, index: number) => ({
            ...t,
            sno: index + 1,
          }))}
          columns={TestimonialTableColumns}
          actions={{
            actionBtn: {
              addKey: {
                showAddButton: true,
                function: () => {
                  onAdd();
                },
              },
              editKey: {
                showEditButton: true,
                function: (e: any) => {
                  onEdit(e);
                },
              },
              deleteKey: {
                showDeleteButton: true,
                function: (dt: string) => {
                  setDeleteData({ open: true, data: dt });
                },
              },
            },
            search: {
              show: true,
              searchValue: searchQuery,
              onSearchChange: (e: any) => setSearchQuery(e.target.value),
            },
            resetData: {
              show: true,
              text: "Reset Data",
              function: () =>  resetTableData(),
            },
            pagination: {
              show: true,
              onClick: handleChangePage,
              currentPage: currentPage,
              totalPages: location.totalPages,
            },
          }}
          loading={location.loading}
        />
        <DeleteData
          getData={() => applyGetAllRecords({})}
          isOpen={deleteData.open}
          data={deleteData.data}
          onClose={() => setDeleteData({ data: null, open: false })}
        />
      </>
    );
  }
);

export default LocationList;