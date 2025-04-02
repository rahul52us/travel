'use client'
import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import stores from "../../store/stores";
import useDebounce from "../../component/config/component/customHooks/useDebounce";
import { tablePageLimit } from "../../component/config/utils/variable";
import CustomTable from "../../component/config/component/CustomTable/CustomTable";
import { Box, Text, Tooltip } from "@chakra-ui/react";

const BookingList = observer(({ onAdd, onEdit }: any) => {
  const {
    bookingStore: { getBooking, booking },
    auth: { openNotification },
  } = stores;

  const [currentPage, setCurrentPage] = useState(1);
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
      }

      getBooking(query)
        .then(() => {})
        .catch((err) => {
          openNotification({
            type: "error",
            title: "Failed to get Booking",
            message: err?.message,
          });
        });
    },
    [debouncedSearchQuery, getBooking, openNotification]
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
  const ContactTableColumn = [
{
        headerName: "Title",
        key: "title",
        type: "component",
        metaData: {
          component: (dt: any) => {
            return(
            <Box m={1}>
              <Text>{Array.isArray(dt?.title) ?  dt?.title?.join(' , ') : dt?.title}</Text>
            </Box>
          )},
        },
        props: {
          row: { minW: 120, textAlign: "center" },
          column: { textAlign: "center" },
        },
      },    { headerName: "Type", key: "type", props: { row: { textAlign: "center" } } },
    { headerName: "Name", key: "name", props: { row: { textAlign: "center" } } },
    { headerName: "Phone", key: "phone", props: { row: { textAlign: "center" } } },
    { headerName: "Email", key: "email", props: { row: { textAlign: "center" } } },
    {
            headerName: "Comment",
            key: "comment",
            type: "tooltip",
            function: (testimonial: any) =>
              testimonial.comment ? (
                <Tooltip label={testimonial?.comment} hasArrow zIndex={9999}>
                  <span>{testimonial?.comment?.slice(0, 50)}</span>
                </Tooltip>
              ) : (
                "-"
              ),
            props: { row: { textAlign: "center" } },
          },
  ];

  return (
    <CustomTable
      title="Booking"
      data={booking?.data?.map((it : any) => ({...it, title : it?.details?.title, type : it?.details?.type})) || []}
      columns={ContactTableColumn}
      actions={{
        actionBtn: {
          addKey: {
            showAddButton: false,
            function: () => {
              onAdd()
            },
          },
          editKey: {
            showEditButton: false,
            function: (e : any) => {
              onEdit(e)
            },
          },
          deleteKey: {
            showDeleteButton: false,
            function: (dt: string) => {
              alert(dt);
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
          function: resetTableData,
        },
        pagination: {
          show: true,
          onClick: handleChangePage,
          currentPage: currentPage,
          totalPages: booking.totalPages,
        },
      }}
      loading={booking.loading}
    />
  );
});

export default BookingList;
