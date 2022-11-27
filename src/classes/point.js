export function point(x,y){
    this.x=x;
    this.y=y;
    
    function getX(){
        return this.x;
    }

    function getY(){
        return this.y;
    }

    
    
}