import React from "react";
import "./styleAdmin.css";
import { useAdmin } from "../context/AdminContext";

const Admin = () => {
  const {
    products,
    form,
    loading,
    handleLogout,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useAdmin();

  return (
    <div className="admin-page">
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <span className="nav-link">Bienvenido Administrador</span>
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