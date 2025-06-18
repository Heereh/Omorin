import { Command } from 'commander';
import { registerReactCommands } from './react/index.js';

export function registerCommands(program: Command) {
  registerReactCommands(program);
}
