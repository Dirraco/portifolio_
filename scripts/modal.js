// Dados dos Projetos

const dataProjects = [
    {
        title: 'Podrão',
        date: '24 de dezembro de 2023',
        description: `Podrão é uma landing page fictícia em um restaurante <br><br>
        `, 
        videoSrc: `./assets/projects/podrao.png`,
        linkedin: 'https://www.linkedin.com/posts/diego-santos-13896a243_podr%C3%A3o-activity-7133463343800987650-0SbR?utm_source=share&utm_medium=member_desktop',
        repository: 'https://github.com/Dirraco/projeto_md14',
        site: 'https://projeto-md-14.vercel.app/'
    },
    {
        title: 'One Piece',
        date: '24 de dezembro de 2023',
        description: `One Piece é uma landing page com foco no anime <br><br>
        `, 
        videoSrc: `./assets/projects/onepiece.png`,
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7142883553884758016/',
        repository: 'https://github.com/Dirraco/landing_page-one_piece',
        site: 'https://landing-page-one-piece-mu.vercel.app/'
    },
    {
        title: 'Game Shop',
        date: '17 de Agosto de 2023',
        videoSrc: `./assets/mini-languages/html-5-svg.svg`,
        linkedin: 'https://www.linkedin.com/in/diego-santos-13896a243/',
        description: `O Game Shop é uma landing page de uma loja de jogos <br><br>`, 
        repository: `https://github.com/Dirraco/ebac_p1_gameshop_site`,
    },
    {
        title: 'Agenda Contaos',
        date: '5 de Setembro de 2023',
        description: `Agenda Contaos é uma aplicação para cadastra contatos <br><br>
        `, 
        videoSrc: `./assets/projects/agenda-contaos.jpg`,
        linkedin: 'https://www.linkedin.com/in/diego-santos-13896a243/',
        repository: 'https://github.com/Dirraco/projeto2_ebac',
        site: 'https://projeto2-ebac-virid.vercel.app/'
    },
    {
        title: 'Validação de Números',
        date: '23 de Agosto de 2023',
        description: `Esse é um projeto que eu desenvolvi que faz a validação de dois números; <br>`,
        videoSrc: './assets/projects/validacao-exercicios.jpg',
        linkedin: 'https://www.linkedin.com/in/diego-santos-13896a243/',
        repository: 'https://github.com/Dirraco/modulo7_ebac',
        site: 'https://modulo7-ebac.vercel.app/'
    },

]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
