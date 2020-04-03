
export async function loadData<T>(dataContext: any, type: string): Promise<T> {
    return <T><any>await dataContext
        .keys()
        .map((context: any) => ({
            ...dataContext(context),
            key: context.replace("./", "").replace(".yml", "")
        }))
        .map((a: any) => ({ ...a, type: type }));
}