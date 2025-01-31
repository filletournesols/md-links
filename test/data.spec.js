const { readFileFun, isValidURL } = require("../data.js");

const part1 = "./mdtests/part1.md"

describe("readFileFun", () => {

    it("should return data", () => {
        readFileFun(part1).then((data)=>{
            const dataPartOne = "## 1. Preámbulo [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...) y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional `README.md`)."
            expect(data).toBeString(dataPartOne)
        })
    })

})

describe ("isValidURL", () =>{

    it("should get the link status", () => {
        isValidURL(part1).then((link)=>{
            const statusLink = link.status
            expect(statusLink).toBe(undefined)
        })
    })

})