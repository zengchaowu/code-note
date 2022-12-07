rm -fr src/.vitepress/dist
pnpm build
scp -r src/.vitepress/dist/* ubuntu@43.156.67.207:/home/ubuntu/websites/code-note/