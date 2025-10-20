async function t(){const o=await fetch("https://apiaf.cofadena.gob.bo/activos/");if(!o.ok)throw new Error("Error al obtener activos");return await o.json()}export{t as f};
