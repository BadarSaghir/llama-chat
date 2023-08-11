use serde::Deserialize;
use serde::Serialize;


#[derive(Serialize,Deserialize,Clone,Debug)]
pub struct Message {
    pub id:String,
    pub text: String,
    pub user: bool,
}
