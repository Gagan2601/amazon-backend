const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/jwtAuth");
const user = require("../controllers/user");

router.post("/user/save-address", authenticateToken, user.saveUserAddress);
router.put("/user/:id", authenticateToken, user.changeUserInfo);
router.get("/user/:id", authenticateToken, user.getUserInfo);

router.post("/seller/save-address", authenticateToken, user.saveSellerAddress);
router.put("/sellers/:id", authenticateToken, user.changeSellerInfo);

router.get("/cart", authenticateToken, user.getCartContents);

router.post("/add-to-cart", authenticateToken, user.addToCart);

router.delete("/remove-from-cart/:id", authenticateToken, user.removeFromCart);

router.post("/order", authenticateToken, user.order);

router.get("/seller/orders", authenticateToken, user.getSellerNotifications);

router.get("/orders/me", authenticateToken, user.myOrders);

router.delete("/cancel-order/:id", authenticateToken, user.cancelOrder);

// //This router needs to be put at correct place with correct authentication
// router.post('/change-order-status', user.changeStatus);

module.exports = router;
