module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
      {
        type: 'input',
        name: 'className',
        message: 'Class name?',
      },
      {
        type: 'list',
        name: 'storybookType',
        message: 'Storybook root hierarchy type?',
        choices: ['Components', 'Elements', 'Layout'],
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'templates/component/index.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/component/component.stories.hbs',
      },
    ],
  })

  plop.setGenerator('recipe', {
    description: 'recipe',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Recipe name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/recipes/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/recipe/recipe.stories.hbs',
      },
    ],
  })
}
