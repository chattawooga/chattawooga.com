
export function loadData<T>(dataContext: any, type: string): T {
    return <T><any>dataContext
        .keys()
        .map((context: any) => ({
            ...dataContext(context),
            key: context.replace("./", "").replace(".yml", "")
        }))
        .map((a: any) => ({ ...a, type: type }));
}