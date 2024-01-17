import { test, expect } from "@playwright/test";

test("タスク削除 １つ選択", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page
        .getByRole("row", { name: "checkbox 全入力テスト full fill" })
        .locator("#checkbox-table-search")
        .check();
    await page.getByRole("button", { name: "削除" }).click();

    await expect(page.getByText("全入力テスト")).not.toBeVisible();
});

test("タスク削除 ２つ選択", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page
        .getByRole("row", { name: "checkbox 期限未入力テスト no limit" })
        .locator("#checkbox-table-search")
        .check();
    await page
        .getByRole("row", { name: "checkbox 詳細未入力テスト 2024/1/" })
        .locator("#checkbox-table-search")
        .check();
    await page.getByRole("button", { name: "削除" }).click();

    await expect(page.getByText("期限未入力テスト")).not.toBeVisible();
    await expect(page.getByText("詳細未入力テスト")).not.toBeVisible();
});

test("タスク削除 未選択", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // アラートが表示されているか確認
    page.on("dialog", async (dialog) => {
        // console.log("メッセージ：" + dialog.message());
        expect(dialog.message()).toBe("削除するタスクを選択してください");
        await dialog.accept();
    });

    await page.getByRole("button", { name: "削除" }).click();
});
