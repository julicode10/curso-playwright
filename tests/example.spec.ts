import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cursos.devtalles.com/');
  await page.getByRole('link', { name: 'Cursos', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Buscar...' }).click();
  await page.getByRole('searchbox', { name: 'Buscar...' }).fill('react');
  await page.getByRole('searchbox', { name: 'Buscar...' }).press('Enter');
  await page.getByRole('link', { name: 'Next.js: El framework de' }).click();
  await page.getByRole('button', { name: 'Sección 1: Introducción' }).click();
  await page.getByRole('button', { name: 'Sección 6: Incremental &' }).click();
});
