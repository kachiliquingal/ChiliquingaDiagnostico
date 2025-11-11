
document.addEventListener("DOMContentLoaded", () => {
    const botonMostrar = document.getElementById("btn-mostrar");
    botonMostrar.addEventListener("click", cargarPersonajes);
});

async function cargarPersonajes() {
    try {
        const res = await fetch('/api/personajes');
        const personajes = await res.json();

        const tbody = document.getElementById('tabla-personajes');
        tbody.innerHTML = '';

        personajes.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.id}</td>
                <td>
                    <img src="${p.image}" alt="${p.name}" width="60" class="rounded me-2">
                    ${p.name}
                </td>
                <td>${p.status} - ${p.species}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
}
