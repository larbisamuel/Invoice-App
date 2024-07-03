import { Item } from "./Item";



const  baseUrl = "https://invoice-api-4a9x.onrender.com";
const  productUrl =  `${baseUrl}/api/product`;


function translateStatuseTOErrorMessage(status: number) {
  switch (status) {
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the projects(s).";
    default:
      return "There was an error retrieving the project(s). Please try again.";
  }
}
const productApi =  {

  async getAllProduct(tk: string|null): Promise<Item[]> {  
    return await fetch(productUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tk}`
        },
    }).then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
       return jsonResponse.data 
      }
      else{
        const httpErrorInfo = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
        const errorMessage = translateStatuseTOErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
      }
      }
    )
    },

    async createProduct(product: Item): Promise<Item>{
      const token = localStorage.getItem('token');
      return await fetch(productUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)      
    }).then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
       return jsonResponse.data 
      }
      else{
        const httpErrorInfo = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
        // console.log(`logserver http error ${JSON.stringify(httpErrorInfo)}`)

        const errorMessage = translateStatuseTOErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
      }
    })
    },

    async updateProduct(product: Item): Promise<Item>{
      const token = localStorage.getItem('token');
      return await fetch(`${productUrl}/product/${product.product_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)      
    }).then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
       return jsonResponse.data 
      }
      else{
        const httpErrorInfo = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
        // console.log(`logserver http error ${JSON.stringify(httpErrorInfo)}`)

        const errorMessage = translateStatuseTOErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
      }
    })
    },
    async deleteProduct(product_id: string) {
      const token = localStorage.getItem('token');
      return await fetch(`${productUrl}/product/${product_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }     
    }).then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json()
        // console.log(jsonResponse)
       return jsonResponse.data 
      }
      else{
        const httpErrorInfo = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
        // console.log(`logserver http error ${JSON.stringify(httpErrorInfo)}`)

        const errorMessage = translateStatuseTOErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
      }
    })
  }

}


export default productApi