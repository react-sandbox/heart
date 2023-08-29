import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Heart', () => {
  test('renders with width and height', async ({ page }) => {
    await expect(page.locator('[data-sandbox-heart]')).toHaveCSS(
      'width',
      '84px'
    )
    await expect(page.locator('[data-sandbox-heart]')).toHaveCSS(
      'height',
      '84px'
    )
  })

  test('renders svg fill as transparent when not active', async ({ page }) => {
    await expect(page.locator('[data-sandbox-heart] svg')).toHaveCSS(
      'fill',
      'rgba(0, 0, 0, 0)'
    )
  })

  test('renders svg fill with red when active', async ({ page }) => {
    await page.locator('[data-sandbox-heart]').click()
    await expect(page.locator('[data-sandbox-heart] svg')).toHaveCSS(
      'fill',
      'rgb(255, 0, 0)'
    )
  })
})
