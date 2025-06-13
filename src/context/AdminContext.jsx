import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productos")) || []
  );
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    stock: "",
    imagen: "",
    categoria: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      // Editar producto existente
      const updatedProducts = products.map((p) =>
        p.id === form.id
          ? {
              ...p,
              nombre: form.name,
              precio: form.price,
              stock: form.stock,
              imagen: form.imagen,
              categoria: form.categoria,
            }
          : p
      );
      setProducts(updatedProducts);
      localStorage.setItem("productos", JSON.stringify(updatedProducts));

      Swal.fire({
        title: "¡Producto actualizado!",
        text: "El producto se ha actualizado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      // Agregar nuevo producto
      const newProduct = {
        id: Date.now(),
        nombre: form.name,
        precio: form.price,
        stock: form.stock,
        imagen: form.imagen,
        categoria: form.categoria,
      };
      const newProducts = [...products, newProduct];
      setProducts(newProducts);
      localStorage.setItem("productos", JSON.stringify(newProducts));

      Swal.fire({
        title: "¡Producto agregado!",
        text: "El producto se ha agregado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }

    // Limpiar formulario
    setForm({
      id: null,
      name: "",
      price: "",
      stock: "",
      imagen: "",
      categoria: "",
    });
  };

  const handleEdit = (product) => {
    setForm({
      id: product.id,
      name: product.nombre,
      price: product.precio,
      stock: product.stock,
      imagen: product.imagen,
      categoria: product.categoria,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredProducts = products.filter((p) => p.id !== id);
        setProducts(filteredProducts);
        localStorage.setItem("productos", JSON.stringify(filteredProducts));

        Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
      }
    });
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        form,
        loading,
        handleLogout,
        handleChange,
        handleSubmit,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};