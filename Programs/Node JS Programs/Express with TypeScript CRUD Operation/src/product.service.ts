import {Product} from './product.model';

export class ProductService {

    private products:Array<Product>=new Array();

    constructor() {
        //let pp:Product ={pid:100,pname:"TV",price:15000}
        let p1 = new Product(100,"TV",120000);
        let p2 = new Product(101,"Computer",55000);
        this.products.push(p1);
        this.products.push(p2);
    }
    // business method 
    // retrieve all products details. 
    getAllProductDeails():Array<Product>{
        return this.products;
    }

    getProductById(id:number):any {
        let result = this.products.find(p=>p.pid==id);
        if(result==undefined){
            return "Record not found"
        }else {
            return result;
        }
    }

    storeProductDetails(product:Product):string{
        if(product.pid==undefined || product.pname==undefined || product.price==undefined){
                return "Property missing";
        }else {
            let result = this.products.find(p=>p.pid==product.pid);
            if(result==undefined) {
                this.products.push(product)
                return "Record inserted successfully";
            }else {
                return "PId must be unique";
            } 
        }
    }

    deleteProductById(pid:number):string {
        let index = this.products.findIndex(p=>p.pid==pid);
        if(index<0){
                return "PId is not present";
        }else {
            this.products.splice(index,1)
            return "Product deleted successfully"
        }
    }

    updateProductPrice(product:Product):string {
        let index = this.products.findIndex(p=>p.pid==product.pid);
        if(index<0){
            return "Product not present"
        }else {
            this.products[index].price=this.products[index].price+product.price;
            return "Product updated successfully"
        }
    }
}



