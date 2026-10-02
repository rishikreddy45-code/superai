import{readFile,writeFile}from"node:fs/promises";const p="app/globals.css";const s=await readFile(p,"utf8");await writeFile(p,s.replace("--body:var(--body);--heading:var(--heading)",""));
