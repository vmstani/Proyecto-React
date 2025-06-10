import React, { useState } from "react";
import './styleAdmin.css';
import Swal from 'sweetalert2';

const Admin = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('productos')) || []);
    const [form, setForm] = useState({
        id: null,
        name: "",
        price: "",
        stock: "",
        imagen: "",
        categoria: ""
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
                        categoria: form.categoria
                    }
                    : p
            );
            setProducts(updatedProducts);
            localStorage.setItem('productos', JSON.stringify(updatedProducts));
            
            Swal.fire({
                title: '¡Producto actualizado!',
                text: 'El producto se ha actualizado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            // Agregar nuevo producto
            const newProduct = {
                id: Date.now(),
                nombre: form.name,
                precio: form.price,
                stock: form.stock,
                imagen: form.imagen,
                categoria: form.categoria
            };
            const newProducts = [...products, newProduct];
            setProducts(newProducts);
            localStorage.setItem('productos', JSON.stringify(newProducts));
            
            Swal.fire({
                title: '¡Producto agregado!',
                text: 'El producto se ha agregado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }

        // Limpiar formulario
        setForm({
            id: null,
            name: "",
            price: "",
            stock: "",
            imagen: "",
            categoria: ""
        });
    };

    const handleEdit = (product) => {
        setForm({
            id: product.id,
            name: product.nombre,
            price: product.precio,
            stock: product.stock,
            imagen: product.imagen,
            categoria: product.categoria
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const filteredProducts = products.filter((p) => p.id !== id);
                setProducts(filteredProducts);
                localStorage.setItem('productos', JSON.stringify(filteredProducts));
                
                Swal.fire(
                    '¡Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="admin-page">
            <nav className="navbar">
                <div className="nav-container">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <span className="nav-link">Administración</span>
                        </li>
                    </ul>
                    <button className="logout-btn" onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            <main className="main-content">
                {loading ? (
                    <div className="loading-state">Cargando productos...</div>
                ) : (
                    <>
                        <h1 className="page-title">Panel de Administración</h1>

                        <form className="product-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre del producto"
                                className="form-input"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Precio"
                                className="form-input"
                                value={form.price}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="stock"
                                placeholder="Stock"
                                className="form-input"
                                value={form.stock}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="imagen"
                                placeholder="URL de la imagen"
                                className="form-input"
                                value={form.imagen}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="categoria"
                                placeholder="Categoría"
                                className="form-input"
                                value={form.categoria}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="submit-btn">
                                {form.id ? "Actualizar" : "Agregar"}
                            </button>
                        </form>

                        <ul className="products-grid">
                            {products.map((product) => (
                                <li key={product.id} className="product-card">
                                    <img
                                        src={product.imagen}
                                        alt={product.nombre}
                                        className="product-image"
                                    />
                                    <div className="product-info">
                                        <h3 className="product-name">{product.nombre}</h3>
                                        <p className="product-price">${product.precio}</p>
                                        <p>Stock: {product.stock}</p>
                                        <p>Categoría: {product.categoria}</p>
                                    </div>
                                    <div className="product-actions">
                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() => handleEdit(product)}
                                        >
                                            <i className="fa-solid fa-pen"></i>
                                            Editar
                                        </button>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </main>
        </div>
    );
};

export default Admin;