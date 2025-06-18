import type { Command } from 'commander';
import { generateComponent } from './generate.component.js';
import { generateLayout } from './generate.layout.js';

export function registerReactCommands(program: Command) {
  const react = program
    .command('react')
    .description('Comandos relacionados con React');

  react
    .command('comp')
    .description('Crea un nuevo componente')
    .argument('<name>', 'Nombre del componente')
    .option('-j, --jsx', 'Genera un componente en JSX')
    .option('-t, --tsx', 'Genera un componente en TSX')
    .option(
      '-c, --with-style',
      'Genera un archivo de estilos CSS (Por default  desactivado)',
      false,
    )
    .option(
      '-m, --css-module',
      'Genera un archivo de estilos CSS Module(Por default  desactivado)',
      false,
    )
    .action(generateComponent);

  react
    .command('layout')
    .description('Crea un layout')
    .argument('<name>', 'Nombre del componente')
    .option('-t, --tsx', 'Genera un layout en TSX')
    .option('-j, --jsx', 'Genera un layout en JSX')
    .option(
      '-c, --with-style',
      'Genera un archivo de estilos CSS (Por defecto activado)',
      true,
    )
    .action(generateLayout);
}
