// 엘리먼트에 대한 테이블을 생성 후 데이터를 입력 표현
// tag -> 컬럼, 데이터 -> 데이터

// $table 문법
function makeTable(elem){
	$table = $("<table border='1'>");

	// 컬럼 정의
	for (var i = 0; i < 1; i++) {
		$tr = $("<tr>");
								// 첫번째 row의 children()의 수 (5)
		for (var j = 0; j < elem.eq(0).children().length; j++) {
			$td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	// 전체 로우를 다 할 꺼니까 그냥 elem.length
	for (var i = 0; i < elem.length; i++) {
		$tr = $("<tr>");	
		for (var j = 0; j < elem.eq(i).children().length; j++) { // 한 개의 Row
			// val이 아닌 text(), val은 input태그 값 가져올 때!
			$td = $("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	return $table;
}