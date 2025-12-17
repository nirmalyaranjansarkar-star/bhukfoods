# Bhuk Foods - Operations Manual

## 🚀 Deployment Instructions

### How to Publish

1.  **Open the Terminal** in your workspace.
2.  Run the deploy command:
    ```bash
    npm run deploy
    ```
3.  Wait for the build to finish. Firebase will output your **Hosting URL** (e.g., `https://bhuk-foods-e54d4.web.app`).

### 💻 Local Development
To preview changes before publishing:
```bash
npm install
npm run dev
```

### ⚙️ Admin & Database
- The Admin Dashboard is located at `/admin`.
- Ensure you have enabled **Authentication**, **Firestore**, and **Storage** in your Firebase Console.
- Update `src/firebaseConfig.ts` with your project keys if you haven't already.
