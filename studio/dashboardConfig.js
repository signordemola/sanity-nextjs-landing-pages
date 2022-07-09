export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c9301789644337ca51cd3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sm16oirz',
                  apiId: 'dbcf7819-5755-4875-81ca-4218d55f18fd'
                },
                {
                  buildHookId: '62c93017d203bd3537b203fc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ru1pi9pt',
                  apiId: 'e63a2eda-c759-4839-ae54-c78d7b7af2e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/signordemola/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ru1pi9pt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
