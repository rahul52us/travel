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


export function replaceLabelValueObjects(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => replaceLabelValueObjects(item));
    } else if (obj !== null && typeof obj === 'object') {
      // Check if it's exactly a { label, value } object
      const keys = Object.keys(obj);
      if (
        keys.length === 2 &&
        keys.includes('label') &&
        keys.includes('value') &&
        typeof obj.label === 'string'
      ) {
        return obj.value;
      }

      // Otherwise, recursively process the object
      const newObj: Record<string, any> = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = replaceLabelValueObjects(obj[key]);
        }
      }
      return newObj;
    }

    return obj; // Return primitive value as-is
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