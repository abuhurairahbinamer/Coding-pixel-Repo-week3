export type UIState = "loading" | "error" | "empty" | "results";

type Params<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
  search: string;
};

export function deriveState<T extends { name: { common: string }  }>({
  data,
  loading,
  error,
  search,
}: Params<T>): UIState {
  if (loading) return "loading";
  if (error) return "error";

  const visible = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.trim().toLowerCase())
  );

  if (visible.length === 0) return "empty";

  return "results";
}
console.log("p4 task done with deeepr where loading=true : ",deriveState({data:[],loading:true,error:null,search:""}))
console.log("p4 task done with deeepr where data=[] : ",deriveState({data:[],loading:false,error:null,search:""}))
console.log("p4 task done with deeepr where error is not null : ",deriveState({data:[],loading:false,error:"error",search:""}))
console.log("p4 task done with deeepr where filtered data is not empty : ",deriveState({data:[{name:{common:"pakitsan"}}],loading:false,error:null,search:""}))
//Loading must be checked first because during fetching the data is temporarily empty, so checking empty before loading can show incorrect UI; error is checked next because it is only meaningful after loading finishes, and empty is checked last since it is only valid when loading is complete and no error has occurred.
