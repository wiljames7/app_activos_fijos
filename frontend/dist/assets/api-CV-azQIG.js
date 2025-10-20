async function t(){const o=await fetch("https://saaf.cofadena.gob.bo:8000/activos/");if(!o.ok)throw new Error("Error al obtener activos");return await o.json()}export{t as f};
