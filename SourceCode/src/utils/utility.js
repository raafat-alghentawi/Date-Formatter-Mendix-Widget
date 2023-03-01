import { dateFrmatOption } from "./constants";

export const  generateGUID = ()=> {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }


  export const  getOutputFormat = (data)=> {
    let result = '';
    data.forEach(item => {
        const indexToKey = dateFrmatOption.findIndex(a => a.key === item.format);
        if (indexToKey != -1) {
            result += dateFrmatOption[indexToKey].format;
        }
        if (item.followBy !== undefined && item.followBy !== '') {
            result += "'" + item.followBy +"'";
        } else {
            result += "''";
        }
        
    });

    return result;
  }


  export const  generateOutputFormatOptions = ()=> {
    let options = [];
    dateFrmatOption.forEach(item => {
        options.push({value: item.key,label: item.caption});
    });

    return options;

  }


