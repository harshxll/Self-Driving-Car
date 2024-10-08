function lerp(A,B,t){
    return A+(B-A)*t;
}

function getIntersection(A,B,C,D){
    const tTop=(D.x-C.x)*(A.y-C.y)-(D.y-C.y)*(A.x-C.x);
    const uTop=(C.y-A.y)*(A.x-B.x)-(C.x-A.x)*(A.y-B.y);
    const bottom=(D.y-C.y)*(B.x-A.x)-(D.x-C.x)*(B.y-A.y);
    
    if(bottom!=0){
        const t=tTop/bottom;
        const u=uTop/bottom;
        if(t>=0 && t<=1 && u>=0 && u<=1){
            return {
                x:lerp(A.x,B.x,t),
                y:lerp(A.y,B.y,t),
                offset:t
            }
        }
    }

    return null;
}

function polygonIntersect(polygon1,polygon2){
    for(let i=0;i<polygon1.length;i++){
        for(let j=0;j<polygon2.length;j++){
            if(getIntersection(
            polygon1[i]
            ,polygon1[(i+1)%polygon1.length]
            ,polygon2[j]
            ,polygon2[(j+1)%polygon2.length]))
            {
                return true;
            }
        }
    }
    return false;
}
