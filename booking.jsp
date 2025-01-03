<!DOCTYPE html>
<html>
<head>
    <title>Bookings</title>
</head>
<body>
    <h1>Booking List</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
        <c:forEach var="booking" items="${bookings}">
            <tr>
                <td>${booking.id}</td>
                <td>${booking.customerName}</td>
                <td>${booking.bookingDate}</td>
                <td>${booking.bookingTime}</td>
            </tr>
        </c:forEach>
    </table>
    <a href="create-booking.jsp">Create New Booking</a>
</body>
</html>
