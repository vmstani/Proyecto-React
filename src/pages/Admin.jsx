import React, { useState, useEffect } from "react";
import './styleAdmin.css';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleLogout = () => {
        // Limpiar sesión
        localStorage.removeItem("token");
        sessionStorage.clear();
        // Redirigir al login
        window.location.href = "/login";
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

                        <form className="product-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre del producto"
                                className="form-input"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Precio"
                                className="form-input"
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
                                    </div>
                                    <div className="product-actions">
                                        <button className="action-btn edit-btn">
                                            <i className="fa-solid fa-pen"></i>
                                            Editar
                                        </button>
                                        <button className="action-btn delete-btn">
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
