export const statusCode = {
    info : 300
}

export const getStatusType = (code : string) => {
    if(Number(code) === statusCode.info){
        return 'info'
    }
    else {
        return 'error'
    }
}

export const formatTitle = (destinations?: string | string[]): string => {
    if (!destinations) {
      return "Unknown Destination";
    }

    if (typeof destinations === "string") {
      destinations = [destinations];
    }

    return destinations
      .map(destination =>
        destination
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(', ');
  };

export const getDestinationArray = (pkg : any) => {
    if (!pkg?.destination || !Array.isArray(pkg?.destination)) {
      return "";
    }
      return pkg.destination.map(city => city.trim().replace(/\s+/g, '-')).join('/');
  };