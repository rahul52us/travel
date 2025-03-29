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

export const formatTitle = (destination?: string): string => {
    if (!destination || typeof destination !== "string") {
      return "Unknown Destination";
    }
    return destination
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }