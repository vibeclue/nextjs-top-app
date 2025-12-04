import { getMenu } from "@/api/menu";

export const Menu = async () => {
    const menu = await getMenu(0);
    return(
        <div>
            {JSON.stringify(menu)}
        </div>
    );
}