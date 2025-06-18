import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

interface ComponentOptions {
  jsx?: boolean;
  tsx?: boolean;
  withStyle?: boolean;
  cssModule?: boolean;
}

export function generateComponent(name: string, options: ComponentOptions) {
  console.log(chalk.green(` 🛠️ Generando componente ${name}...`));

  const extension = options.tsx ? 'tsx' : 'jsx';
  const useCssModule = options.cssModule ?? true;
  const incluidCss = options.withStyle ?? true;

  const componentDir = path.resolve('src/components', name);
  const filePath = path.join(componentDir, `${name}.${extension}`);
  const styleFileName = useCssModule ? `${name}.module.css` : `${name}.css`;
  const styleFilePath = path.join(componentDir, styleFileName);

  const importStyled = incluidCss ? `import './${styleFileName};'\n\n` : '';

  const content =
    extension === 'tsx'
      ? `import React from 'react';
${importStyled}type ${name}Props = {};

const ${name}: React.FC<${name}Props> = () => {
  return (
    <div${incluidCss ? ` className='container'` : ''}>
      <h2>${name} Component</h2>
    </div>
  );
};

export default ${name};
`
      : `import React from 'react';
${importStyled}const ${name} = () => {
  return (
    <div${incluidCss ? ` className={styles.container}` : ''}>
      <h2>${name} Component</h2>
    </div>
  );
};

export default ${name};
`;

  const styleContent = `.container {
  /* Estilos del componente ${name} */
  padding: 1rem;
}
`;

  try {
    fs.ensureDirSync(componentDir); // Asegura que el directorio exista
    fs.writeFileSync(filePath, content);
    if (incluidCss) {
      fs.writeFileSync(styleFilePath, styleContent);
      console.log(
        chalk.green(
          ` ✅  Estilos CSS creado con éxito! creado en src/components/${name}.css 📂`,
        ),
      );
    }
    console.log(
      chalk.green(
        ` ✅  Componente ${name} creado con éxito! creado en src/components/${name}.${extension} 📂`,
      ),
    );
  } catch (error) {
    console.error(chalk.red(` 🚨 Error al generar el componente: ${error}`));
    console.error(error);
  }
}
