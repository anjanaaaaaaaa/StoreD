import { Web3Storage } from "web3.storage";
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() as string });
}
function getAccessToken() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  return process.env.WEB3STORAGE_TOKEN;
}
export function makeFileObjects(fileContent: string, file: string) {
  const files = [new File([fileContent], file)];
  return files;
}

export async function storeFiles(files: Array<File>) {
  const client = makeStorageClient();
  try {
    const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
    let uploaded = 0;
    const onStoredChunk = (size: number) => {
      uploaded += size;
      const pct = 100 * (uploaded / totalSize);
      console.log(`Uploading... ${pct.toFixed(2)}% complete`);
    };
    const cid = await client.put(files, { onStoredChunk });

    return cid;
  } catch (error) {
    return error;
  }
}
