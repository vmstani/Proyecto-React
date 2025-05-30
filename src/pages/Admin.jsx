import React, { useState, useEffect } from "react";
import './styleAdmin.css';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        id: null,
        name: "",
        price: "",
        stock: "",
        imagen: "",
        categoria: ""
    });
    const [loading, setLoading] = useState(true);

    // Cargar productos desde localStorage o desde JSON
    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
            setLoading(false);
        } else {
            fetch("/data/data.json")
                .then((response) => response.json())
                .then((data) => {
                    setTimeout(() => {
                        setProducts(data);
                        localStorage.setItem("products", JSON.stringify(data));
                        setLoading(false);
                    }, 2000);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, []);

    // Guardar productos en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

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
        } else {
            const newProduct = {
                id: Date.now(),
                nombre: form.name,
                precio: form.price,
                stock: form.stock,
                imagen: form.imagen,
                categoria: form.categoria
            };
            setProducts([...products, newProduct]);
        }

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
        const confirmDelete = window.confirm("¿Estás seguro de que querés eliminar este producto?");
        if (confirmDelete) {
            setProducts(products.filter((p) => p.id !== id));
        }
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
