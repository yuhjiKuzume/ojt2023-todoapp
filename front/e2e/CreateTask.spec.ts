import { test, expect } from "@playwright/test";

test("タスク作成 全入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("全入力テスト");
    await page
        .locator("div")
        .filter({ hasText: /^期限$/ })
        .getByRole("textbox")
        .click();
    await page.getByLabel("Choose 2024年1月20日土曜日").click();
    await page.locator('textarea[name="content"]').click();
    await page.locator('textarea[name="content"]').fill("full fill");

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("全入力テスト")).toBeVisible();
    await expect(page.getByText("2024/1/20")).toBeVisible();
    await expect(page.getByText("full fill")).toBeVisible();
});

test("タスク作成 全未入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();

    // アラートが表示されているか確認
    page.on("dialog", async (dialog) => {
        // console.log("メッセージ：" + dialog.message());
        expect(dialog.message()).toBe("タスク名を入れてください");
        await dialog.accept();
    });

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();
});

test("タスク作成 タイトル未入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page
        .locator("div")
        .filter({ hasText: /^期限$/ })
        .getByRole("textbox")
        .click();
    await page.getByLabel("Choose 2024年1月21日日曜日").click();
    await page.locator('textarea[name="content"]').click();
    await page.locator('textarea[name="content"]').fill("no title");

    // アラートが表示されているか確認
    page.on("dialog", async (dialog) => {
        // console.log("メッセージ：" + dialog.message());
        expect(dialog.message()).toBe("タスク名を入れてください");
        await dialog.accept();
    });

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();
});

test("タスク作成 期限未入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("期限未入力テスト");
    await page.locator('textarea[name="content"]').click();
    await page.locator('textarea[name="content"]').fill("no limit");

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("期限未入力テスト")).toBeVisible();
    await expect(page.getByText("no limit")).toBeVisible();
});

test("タスク作成 詳細未入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("詳細未入力テスト");
    await page
        .locator("div")
        .filter({ hasText: /^期限$/ })
        .getByRole("textbox")
        .click();
    await page.getByLabel("Choose 2024年1月22日月曜日").click();

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("詳細未入力テスト")).toBeVisible();
    await expect(page.getByText("2024/1/22")).toBeVisible();
});

test("タスク作成 詳細&期限未入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("詳細&期限 未入力テスト");

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("詳細&期限 未入力テスト")).toBeVisible();
});

test("タスク作成 期限に日付以外を入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("期限テスト（文字）");
    await page
        .locator("div")
        .filter({ hasText: /^期限$/ })
        .getByRole("textbox")
        .click();
    await page.locator('input[name="limit"]').nth(2).fill("abc");

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("期限テスト（文字）")).toBeVisible();
    await expect(page.getByText("abc")).not.toBeVisible();
});

test("タスク作成 期限に存在しない日付を入力", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("button", { name: "タスク作成" }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill("期限テスト（存在しない日付）");
    await page
        .locator("div")
        .filter({ hasText: /^期限$/ })
        .getByRole("textbox")
        .click();
    await page.locator('input[name="limit"]').nth(2).fill("2024/1/33");

    // 作成ボタンを押す
    await page.getByRole("button", { name: "作成", exact: true }).click();

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("期限テスト（存在しない日付）")).toBeVisible();
    await expect(page.getByText("2024/1/33")).not.toBeVisible();
});

/* ------------------------------------------------------------------------------------------ 

test("タスク作成 全入力", async ({ page }) => {
    const task = { title: "e2e-test", limit: "2024-1-20", content: "testing" };

    // API mock を使ってタスクを追加
    await page.route("https://todoapp-ojt2023.net/api/tasks/", async (route) => {
        const response = await route.fetch();
        const json = await response.json();
        json.push(task);
        await route.fulfill({ response, json });
    });

    await page.goto("http://localhost:3000/");

    // 追加したタスクが登録されているか確認
    await expect(page.getByText("e2e-test")).toBeVisible();
});

*/
