import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
interface ComponentOptions {
  jsx?: boolean;
  tsx?: boolean;
  withStyle?: boolean;
}

export function generateLayout(name: string, options: ComponentOptions) {
  console.log(chalk.green(` 🛠️ Generando layout ${name}...`));

  const extension = options.tsx ? 'tsx' : 'jsx';
  const layoutDir = path.resolve('src/layouts', name);
  const filePath = path.join(layoutDir, `${name}.${extension}`);
  const incluidCss = options.withStyle ?? true;
  const styleFileName = `${name}.css`;

  const importStyled = incluidCss ? `import './${styleFileName};'\n\n` : '';

  const content =
    extension === 'tsx'
      ? ` 
  ${importStyled} 
interface ${name}Props{
children:React.ReactNode;
}

export const ${name}:React.FC<> = ({children}) =>{
    return (
  <div className="${name}">
    <header>Auth Header</header>
     {children}
  </div>
  );
  
}
export default ${name};
  `
      : `
    ${importStyled}
    
  export const ${name} = () =>{
      return (
    <div className="${name}">
       <header>Auth Header</header>
    </div>
  );
}
    
export default ${name};
  `;

  const styleContent = `.${name}{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  max-width:1400px
 
}`;

  try {
    fs.ensureDirSync(layoutDir); //Asegurar  que el directorio exista
    fs.writeFileSync(filePath, content);
    if (incluidCss) {
      const styleFilePath = path.join(layoutDir, styleFileName);
      fs.writeFileSync(styleFilePath, styleContent);
      console.log(
        chalk.green(
          ` ✅  Estilos CSS creado con éxito! creado en src/layouts/${name}.css 📂`,
        ),
      );
    }
    console.log(
      chalk.green(
        ` ✅  Layout ${name} creado con éxito! creado en src/layouts/${name}.${extension} 📂`,
      ),
    );
  } catch (error) {
    console.error(chalk.red(` 🚨 Error al generar el layout: ${error}`));
    console.error(error);
  }
}
