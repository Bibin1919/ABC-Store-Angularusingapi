import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allItems:any[], searchKey:string,propertyName:string): any[] {

    /* array after transform */
    const result:any=[]
    if(!allItems || searchKey=='' || propertyName==''){
      return allItems
    }
    allItems.forEach((item:any)=>{
      if(item [propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
