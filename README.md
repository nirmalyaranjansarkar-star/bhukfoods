# Bhuk Foods - Operations Manual

## 🚀 Deployment Instructions

### Automated Deployment (via GitHub)
This project is configured with a CI/CD workflow to automatically deploy to Firebase Hosting.

1.  **On Pull Request**: A temporary preview URL will be generated and posted as a comment on the PR.
2.  **On Push to `main`**: The changes will be automatically built and deployed to your live hosting URL.

**Setup Required:**
To enable this workflow, you must add a secret to your GitHub repository:
1.  Go to your Firebase Project Settings > Service Accounts.
2.  Generate a new private key (JSON file).
3.  In your GitHub repo, go to **Settings > Secrets and variables > Actions**.
4.  Create a **New repository secret** with the name `FIREBASE_SERVICE_ACCOUNT_BHUK_FOODS_E54D4`.
5.  Paste the entire content of the downloaded JSON file as the secret's value.

### Manual Deployment
If you need to deploy manually from your local machine:

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
- Update `firebaseConfig.ts` with your project keys if you haven't already.
