# react-r3f-tutorial012
React+TypeScriptなWebアプリで、R3Fのtutorial12。(Materials編)

![](https://storage.googleapis.com/zenn-user-upload/df15e25fee3b-20231224.png)
​
# まとめ
特段、理解のムズいとこはなかったけど...<br />
TypeScriptに置き換えると、ホントにビルドが通らんかったのが苦しかった。

## type BoxPropsを作成した
元のHPでは、wireframeプロパティを普通に使ってるけど、TypeScriptだと通らん。
BoxPropsを作って、MeshPropsをラップした。
## useControls::onChangeの引数には型指定が必要。
TypeScriptだと当然なんやけど、気づいてなかった。ハマった～。
## materialには、wireframe、flatShading、colorプロパティがない。
まさか、materialに上記のプロパティがないって思わなくって、原因判明に丸一日費やした。
結果的は、個別にキャストしたんだけど、もう少し、スマートな実装があると思う。
​
ムズかった～。
