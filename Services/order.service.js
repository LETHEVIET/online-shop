import http from "../http-common";

class OrderService {
    create(data) {
        return http.post("/order", data);
    }
}

export default new OrderService();