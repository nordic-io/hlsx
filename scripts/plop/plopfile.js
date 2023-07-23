/** @type {import('plop').NodePlopAPI} */
export default function (plop) {
  plop.setGenerator('Component', {
    description: 'Create a new component',
    prompts: [
      {
        message: 'What is your component name?',
        name: 'name',
        type: 'input'
      },
      {
        message:
          'What complexity fits better your component on material design?',
        name: 'type',
        type: 'list',
        choices: ['Atoms', 'Molecules', 'Organisms']
      }
    ],
    actions: [
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/index.ts',
        templateFile: 'templates/components/index.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
        templateFile: 'templates/components/component.tsx.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.types.ts',
        templateFile: 'templates/components/types.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.overrides.ts',
        templateFile: 'templates/components/overrides.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.styles.ts',
        templateFile: 'templates/components/styles.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/{{ pascalCase name }}/{{ pascalCase name }}.test.tsx',
        templateFile: 'templates/components/test.tsx.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/components/{{ lowerCase type }}/index.ts',
        template: "export * from './{{ pascalCase name }}'\n",
        unique: true,
        separator: '',
        type: 'append'
      }
    ]
  })

  plop.setGenerator('Provider', {
    description: 'Create a new provider',
    prompts: [
      {
        message: 'What is your provider name?',
        name: 'name',
        type: 'input'
      }
    ],
    actions: [
      {
        path: '../../src/providers/{{ pascalCase name }}Provider/index.ts',
        templateFile: 'templates/providers/index.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/providers/{{ pascalCase name }}Provider/constants.ts',
        templateFile: 'templates/providers/constants.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/providers/{{ pascalCase name }}Provider/{{ pascalCase name }}Provider.tsx',
        templateFile: 'templates/providers/provider.tsx.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/providers/{{ pascalCase name }}Provider/{{ pascalCase name }}Provider.types.ts',
        templateFile: 'templates/providers/types.ts.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/providers/{{ pascalCase name }}Provider/{{ pascalCase name }}Provider.test.tsx',
        templateFile: 'templates/providers/test.tsx.hbs',
        type: 'add',
        skipIfExists: true
      },
      {
        path: '../../src/providers/index.ts',
        template: "export * from './{{ pascalCase name }}Provider'\n",
        unique: true,
        separator: '',
        type: 'append'
      }
    ]
  })
}
