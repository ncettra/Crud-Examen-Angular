import { Component, OnInit } from '@angular/core';
import { ProductService , Product} from 'src/app/services/product.service';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.component.html',
  styleUrls: ['./index-products.component.css']
})
export class IndexProductsComponent implements OnInit {

  productos : any = [ ];
  producto : any ;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.listarProductos()
  }

  listarProductos(){
    this.service.getAll().subscribe( lista => {
      this.productos = lista
    })
  }

  listarProductosCodigo(){
    this.productos = []
    const codigoIngresado = <string> (<HTMLInputElement>document.getElementById("codigoIngresado")).value;

    if(codigoIngresado==="")
    {
      this.listarProductos()
    }
    else
    this.service.getByCodigoBarra(codigoIngresado).subscribe( lista => {
      if(lista!=null)
      {
        this.producto = lista;
        this.productos.unshift(this.producto)
      }      
    })
  }

  seleccion:any
  
  productoNuevo: Product={
    id: 0,
    nombre:'',
    valorCompra:0,
    valorVenta:0,
    codigoBarra:'',
  };



  error:any
  seleccionarProducto(item:any){
    this.error = undefined
    this.seleccion = Object.assign({}, item)
  }

  agregarProducto()
  {
    console.log("Agregar producto works");
    this.error = undefined

    this.service.post(this.productoNuevo).subscribe(respuesta=>{
      console.log(respuesta);
      this.listarProductos(); //actualizo la lista
    },error=>{
      console.log(error)
      this.error = "Error al agregar el producto"
    })
  }


  editarProducto()
  {
    console.log("Editar producto works");
    this.error = undefined
    this.service.put(this.seleccion).subscribe(respuesta=>{
      console.log(respuesta);
      this.listarProductos(); //actualizo la lista
    },error=>{
      console.log(error)
      this.error = "Error al actualizar el producto"
    })
  }

  eliminarProducto(){
    console.log("Eliminar producto works");
    console.log(this.seleccion.id);
    console.log(this.seleccion);
    this.service.delete(this.seleccion).subscribe(respuesta=>{

      this.listarProductos()
      
    },error=>{
      console.log(error)
      this.error = "Error al eliminar el producto"
    })
  }

}
