import getData from '../utils/getData'

const Footer = async () => {
    const data = await getData()

    let ankle = []
    for (let i = 1; i <= data.info.pages; i++){
        ankle.push(i)
    }

    let a = 0;
    const view = `
    <div class="Footer-pages">
        <h4>Pages</h4>
        <div>
            ${ankle.map(() => 
                `<a href="#/?page=${++a}/">${a}</a>`
            ).join('')}
        </div>
    </div>
    `;
    return view
}

export default Footer
