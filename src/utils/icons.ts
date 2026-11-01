/**
 * Icon registry.
 *
 * The content file (src/data/portfolio.ts) refers to icons by name, so you never
 * have to import components there. To make a new Lucide icon available, import it
 * below and add it to `icons`. Browse icons at https://lucide.dev/icons
 */
import {
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  Briefcase,
  Camera,
  ChartColumn,
  ChartLine,
  CodeXml,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Layers,
  LayoutTemplate,
  Megaphone,
  Palette,
  PenTool,
  ScanEye,
  ShoppingBag,
  Sparkles,
  Terminal,
  Users,
  Wrench,
} from '@lucide/astro';

export const icons = {
  award: Award,
  badge: BadgeCheck,
  book: BookOpen,
  brain: Brain,
  briefcase: Briefcase,
  camera: Camera,
  chart: ChartColumn,
  'chart-line': ChartLine,
  code: CodeXml,
  cpu: Cpu,
  database: Database,
  globe: Globe,
  graduation: GraduationCap,
  layers: Layers,
  layout: LayoutTemplate,
  megaphone: Megaphone,
  palette: Palette,
  pen: PenTool,
  vision: ScanEye,
  shop: ShoppingBag,
  sparkles: Sparkles,
  terminal: Terminal,
  users: Users,
  wrench: Wrench,
} as const;

export type IconName = keyof typeof icons;
