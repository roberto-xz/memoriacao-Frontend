import{r as n}from"./repository-BvJTPuxz.js";const o=async(e,i,l)=>{let a=`SELECT COUNT(*) as t FROM publications WHERE type = '${l}'`;return e!=="all"&&(a+=` AND category = '${e}'`),i!==0&&(a+=` AND publication_year = ${i}`),(await n.query(a))[0]?.t||0},b=async(e,i=2)=>{let l=`
            SELECT title,cover, abstract, source_link, pdf_link, authors, publication_year 
            FROM publications 
            WHERE type = '${e}' ORDER BY id DESC LIMIT ${i}`;return(await n.query(l)).map(t=>({title:t.title,summary:t.abstract,authors:t.authors,published:t.publication_year,origem:t.source_link,pdf_link:t.pdf_link,cover:t.cover}))},E=async(e,i,l,a,r)=>{let t=`
        SELECT title, cover, abstract, source_link, pdf_link, isbn,authors, publication_year 
        FROM publications 
        WHERE type = '${r}'`;return e!=="all"&&(t+=` AND category = '${e}'`),i!==0&&(t+=` AND publication_year = ${i}`),t+=` ORDER BY id DESC LIMIT ${a} OFFSET ${l}`,(await n.query(t)).map(s=>({title:s.title,summary:s.abstract,authors:s.authors,published:s.publication_year,origem:s.source_link,pdf_link:s.pdf_link,cover:s.cover,isbn:s.isbn}))};export{b as a,E as b,o as g};
