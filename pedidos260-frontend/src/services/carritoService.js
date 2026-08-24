import api from './api';

export const getProductos = async () => {
  const response = await api.get('/productos');
  return response.data;
};

export const crearPedido = async (pedidoData) => {
  const response = await api.post('/carrito', pedidoData);
  return response.data;
};