const socket = io();

const map = L.map("map").setView([0, 0], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "OpenStreetMap"
}).addTo(map);

const markers = {};

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });

        // Show your own marker
        if(markers[socket.id]){
            markers[socket.id].setLatLng([latitude, longitude]);
        } else {
            markers[socket.id] = L.marker([latitude, longitude]).addTo(map);
        }

        map.setView([latitude, longitude], 16);
    }, (error) => {
        console.error(error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
}

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    if(id === socket.id) return;  // optional: skip own marker, already handled

    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});
socket.on("user-disconnect",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})