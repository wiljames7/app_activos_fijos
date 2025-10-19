async function o(){const t=await fetch("http://localhost:8000/api/activos/");if(!t.ok)throw new Error("Error al obtener activos");return await t.json()}export{o as f};
